const stores = [{authors: [], books: [], reviews: []}]

function store() {
  return stores[stores.length-1]
}