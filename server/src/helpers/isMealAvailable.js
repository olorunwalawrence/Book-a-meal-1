import moment from 'moment';
import db from '../models';

/**
 * Function to check if menu for the day contains meal
 * @param {string} mealId
 * @param {string} date
 * @return {bool} returns false or true
 */
async function isMealAvailable(mealId, date = moment().format('YYYY-MM-DD')) {
  // find a menu whose date is today and has the meal as an available meal for the day
  const menu = await db.Menu.findOne({ where: { date } });
  const checkMeal = menu.meals.includes(mealId);

  if (!checkMeal) return false;

  return true;
}

export default isMealAvailable;
