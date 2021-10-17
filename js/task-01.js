
const listEl = document.querySelectorAll("li.item");

console.log(`Number of categories: ${listEl.length}`);
// -----==================------

listEl.forEach(el => {
    const title = el.querySelector('h2').textContent;
    console.log(`Category: ${title}`);

    const ulListEl = el.querySelectorAll('li').length;
    console.log(`Elements: ${ulListEl}`);
})

// -----==================------
