import { AxiosError } from 'axios';
import api from '@/utils/api';

export async function postData(
  url: string,
  //todo: to type arg
  data: any,
) {
  try {
    const objectData = { data }; // { data: data }
    //todo: to type such response api.post<..?..>
    const response = await api.post(url, objectData, {
      params: {
        populate: '*',
      },
    });
    return response;
    //  todo: recognize why we need unknown type for catch()?
  } catch (error: Error | AxiosError | unknown) {
    throw error;
  }
}
