import 'server-only'; // means that function could be executed only in Server Components
import api from '@/utils/api';
import { languageE, LocaleT } from '@/constants/types';

export async function getData(
  url: string,
  locale: LocaleT = languageE.uk,
  populate?: string,
) {
  try {
    const response = await api.get(url, {
      params: {
        locale,
        populate,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
