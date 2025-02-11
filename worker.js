import kebabcaseKeys from 'kebabcase-keys'

export default {
  fetch: async req => {
    const { pathname, search } = new URL(req.url)
    const data = await fetch('https:/' + pathname + search, req).then(res => res.json())
    return new Response(JSON.stringify(kebabcaseKeys(data, { deep: true }), null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}

