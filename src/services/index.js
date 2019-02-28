
import axios from 'axios';
import Sugar from 'sugar';

const apiKey = 'A1YhS3LQPyVQGHGxQP8MuTH9A2iWSeW6';
const apiUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';

export const Services = {
    searchNews: async (materialType, keywords, page) => {
        const link = `${apiUrl}fq=type_of_material:"${materialType}"&q=${keywords}&page=${page}&api-key=${apiKey}`;
        try {
            const { data } = await axios.create().get(link)
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
    }

}