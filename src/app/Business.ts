export interface Business{
  $key$: string;
  company?: string;
  description: string;
  year_in_business?:number;
  street_address?: string;
  city: string;
  state?:string;
  zipcode?: string;
  phone?:string;
  email?:string;
  created_at: string;
}
