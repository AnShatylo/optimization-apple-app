import axios from 'axios';

const data_url = '/api/mobile/mobile.json';

export async function getAppData() {
  try {
    const res = await axios.get(data_url);
    return res.data;
  } catch (err) {
    alert('Error fetching data: ' + err);
  }
}
