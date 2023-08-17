import { RentalRequestInterface } from 'interfaces/rental-request';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  rental_request?: RentalRequestInterface[];
  company?: CompanyInterface;
  _count?: {
    rental_request?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
