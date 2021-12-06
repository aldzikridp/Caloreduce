const renderFoods = (foods) => {
  let foodItems = '';
  foods.forEach((food) => {
    const item = `
        <div class="flow-root bg-white rounded shadow-2xl p-8 m-4">
        <div class="float-left">
          <h3 class="font-semibold text-black">${food.nama}</h3>
        </div>
        <div class="float-right ml-8 text-center align-middle">${food.kalori} Cal</div>
        </div>
    `;
    foodItems += item;
  });

  return foodItems;
};
module.exports = renderFoods;
