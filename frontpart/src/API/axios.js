import axios from "axios";

const base_url = 'https://cheerio-mark-1-cuddly-space-palm-tree-w6p6q7qrj742grq7-8000.preview.app.github.dev'

export default axios.create({
    baseURL: base_url
})
