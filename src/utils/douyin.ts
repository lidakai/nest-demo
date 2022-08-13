import axios from 'axios';
import { ApiException } from 'src/common/api.exception';
import { ApiErrorCode } from 'src/constants/api-error-code.enum';

export async function douyinData(url: string): Promise<string> {
  const _url = new URL(url);
  const id = _url.pathname.split('/')[3];
  const dataUrl =
    id && `https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${id}`;
  if (dataUrl) {
    const { data } = await axios.get(dataUrl);
    if (Array.isArray(data.item_list) && data.item_list.length) {
      return data;
    }
    throw new ApiException('视频不存在', ApiErrorCode.TIMEOUT);
  }
}
