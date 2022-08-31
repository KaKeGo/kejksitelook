
export interface UserProfile {
  id: number;
  user: number;
  avatar: string;
  bio: string;
  first_name: string;
  last_name: string;
  friends?: (number)[] | null;
  slug: string;
  get_username: string;
  get_full_name: string;
}
