import data from './data.json';

const allCategories = data.map(obj => obj.category);

const categoriesSet = new Set(allCategories);

const categoriesUnique = Array.from(categoriesSet);

const categoriesWithCounts = data.reduce((obj, cat) => {
  if (!obj[cat.category]) {
    obj[cat.category] = 1;
  } else {
    obj[cat.category]++;
  }
  return obj;
}, {});

const namesAndCategories = categoriesUnique.map(name => {
  return {
    name: name,
    count: categoriesWithCounts[name]
  }
})

export default data;

export {
  categoriesSet,
  categoriesUnique, 
  categoriesWithCounts, 
  namesAndCategories
}

