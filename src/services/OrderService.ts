import { IOrder } from '@/entities/IOrder';
import { httpClient } from './HttpClient';



export class OrdersService {
  static async getOrders() {

    const { data } = await httpClient.get<{ orders: IOrder[] }>('/orders');

    return data.orders;
  }
}
