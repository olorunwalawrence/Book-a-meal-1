import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomerMenu from './CustomerMenu';
import { logout } from '../../../../store/operations/auth';
import { fetchMenu } from '../../../../store/operations/menu';
// import { createOrder } from '../../../../store/operations/orders';

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  meals: state.menu.meals
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout, fetchMenu
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CustomerMenu);
