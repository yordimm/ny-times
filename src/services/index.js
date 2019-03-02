
import axios from 'axios';
import Sugar from 'sugar';

const apiKey = 'A1YhS3LQPyVQGHGxQP8MuTH9A2iWSeW6';
const apiUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
const nyLink = 'https://www.nytimes.com/';
const optionalImg = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

export const Services = {
    searchNews: async (materialType, keywords, page) => {
        const link = `${apiUrl}fq=type_of_material:"${materialType}"&q=${keywords}&page=${page}&api-key=${apiKey}`;
        try {
            const { data } = await axios.create().get(link)
            console.log(data)
            return {
                news: data.response.docs,
                newsLength: data.response.meta.hits,
                error: false
            }
        } catch (error) {
            return {
                news: [],
                newsLength: 0,
                error
            }
        }
    },
    formatDate: (date) => {
        let formatedDate = Sugar.Date.create(date, { fromGMT: true })
        formatedDate = (Sugar.Date.format(formatedDate))
        return formatedDate
    },
    getThumbNail: (multimedia) => {
        if (multimedia.length > 1) {
            const thumbnail = (multimedia.find(element => element.subtype === 'thumbnail')).url
            return `${nyLink}${thumbnail}`
        } else {
            return optionalImg;
        }
    },
    getMaterialOptions: () => {
        return ['Article', 'Blog', 'Column', 'Video', 'News', 'Series', 'Text']
    }

}