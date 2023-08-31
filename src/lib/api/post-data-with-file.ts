import { AxiosError } from 'axios';
import api from '@/utils/api';
import FormData from 'form-data';

export async function postDataWithFile(
  url: string,
  //todo: to type arg
  data: any,
) {
  try {
    const { name, email, details, file: files } = data;
    const formData = new FormData();

    // BE CAREFULLY, FUCKING STRAPI CRUTCH!!! In key name need be prefixed with "files."
    formData.append('files.file', files[0], files[0].name);
    const dataObject = {
      name,
      email,
      details,
    };
    formData.append('data', JSON.stringify(dataObject));

    //todo: to type such response api.postForm<..?..>
    const response = await api.postForm(url, formData, {
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
