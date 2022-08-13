import axios from 'axios';

export async function douyinData(url: string): Promise<string> {
  const _url = new URL(url);
  const id = _url.pathname.split('/')[3];
  const dataUrl =
    id && `https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${id}`;
  if (dataUrl) {
    const { data } = await axios.get(dataUrl);
    if (Array.isArray(data.item_list) && data.item_list.length) {
      const originVideo = data
        ? data['item_list'][0]['video']['play_addr']['url_list'][0]
        : '';
      return originVideo ? originVideo.replace('playwm', 'play') : originVideo;
    }
  }
  return '';
}
