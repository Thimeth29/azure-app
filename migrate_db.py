"""
Database Migration Script
Run this script to migrate your database schema to the new structure.
"""
from app import app, db, UserProfile, CultivationAdditionalCost
from sqlalchemy import text, inspect
from datetime import datetime

def migrate_database():
    """Migrate database schema to match current models"""
    with app.app_context():
        try:
            inspector = inspect(db.engine)
            tables = inspector.get_table_names()
            
            # Check if user_profile table exists and has old schema
            if 'user_profile' in tables:
                columns = [col['name'] for col in inspector.get_columns('user_profile')]
                
                # Check if old schema exists (has full_name instead of first_name/last_name)
                if 'full_name' in columns and 'first_name' not in columns:
                    print("[MIGRATION] Detected old user_profile schema. Migrating...")
                    
                    # For SQLite, we need to recreate the table
                    if 'sqlite' in str(db.engine.url).lower():
                        # Get all existing data
                        try:
                            old_profiles = db.session.execute(
                                text("SELECT user_id, full_name, mobile_number, date_of_birth, address, created_at, updated_at FROM user_profile")
                            ).fetchall()
                            
                            # Drop old table
                            db.session.execute(text("DROP TABLE user_profile"))
                            db.session.commit()
                            
                            # Recreate with new schema
                            UserProfile.__table__.create(db.engine)
                            
                            # Migrate data
                            migrated_count = 0
                            for profile in old_profiles:
                                try:
                                    user_id, full_name, mobile, dob, address, created, updated = profile
                                    # Split full_name into first and last
                                    name_parts = (full_name or "").strip().split(" ", 1)
                                    first_name = name_parts[0] if name_parts and name_parts[0] else "Unknown"
                                    last_name = name_parts[1] if len(name_parts) > 1 else ""
                                    
                                    # Try to parse address
                                    address_city = None
                                    address_line1 = None
                                    address_line2 = None
                                    if address:
                                        # Simple split - could be improved
                                        address_lines = address.split("\n", 2)
                                        if len(address_lines) > 0:
                                            address_line1 = address_lines[0][:200] if address_lines[0] else None
                                        if len(address_lines) > 1:
                                            address_line2 = address_lines[1][:200] if address_lines[1] else None
                                    
                                    # Parse date
                                    date_of_birth = None
                                    if dob:
                                        try:
                                            if isinstance(dob, str):
                                                date_of_birth = datetime.strptime(dob, "%Y-%m-%d").date()
                                            else:
                                                date_of_birth = dob
                                        except:
                                            pass
                                    
                                    new_profile = UserProfile(
                                        user_id=user_id,
                                        first_name=first_name,
                                        last_name=last_name,
                                        mobile_number=mobile or "",
                                        date_of_birth=date_of_birth,
                                        address_city=address_city,
                                        address_line1=address_line1,
                                        address_line2=address_line2,
                                        created_at=created,
                                        updated_at=updated
                                    )
                                    db.session.add(new_profile)
                                    migrated_count += 1
                                except Exception as e:
                                    print(f"  [WARNING] Failed to migrate profile for user_id {user_id}: {e}")
                                    continue
                            
                            db.session.commit()
                            print(f"[MIGRATION] Successfully migrated {migrated_count} user profiles")
                        except Exception as e:
                            print(f"[MIGRATION ERROR] Failed to migrate user_profile: {e}")
                            db.session.rollback()
                            # Recreate table anyway
                            try:
                                UserProfile.__table__.create(db.engine)
                                print("[MIGRATION] Created new user_profile table (data migration failed)")
                            except:
                                pass
            
            # Check if cultivation_additional_cost table exists
            if 'cultivation_additional_cost' not in tables:
                print("[MIGRATION] Creating cultivation_additional_cost table...")
                try:
                    CultivationAdditionalCost.__table__.create(db.engine)
                    print("[MIGRATION] cultivation_additional_cost table created")
                except Exception as e:
                    print(f"[MIGRATION ERROR] Failed to create cultivation_additional_cost: {e}")
            
            print("[MIGRATION] Database migration completed")
            
        except Exception as e:
            print(f"[MIGRATION ERROR] {e}")
            import traceback
            traceback.print_exc()

if __name__ == "__main__":
    print("=" * 60)
    print("Database Migration Script")
    print("=" * 60)
    print("Starting database migration...")
    print()
    migrate_database()
    print()
    print("=" * 60)
    print("Migration script completed.")
    print("=" * 60)

