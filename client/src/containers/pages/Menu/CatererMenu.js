import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatererMenu from '../../../components/pages/Menu/CatererMenu';
import { fetchMenu, setCurrentDay } from '../../../actions/menu';
import { logout } from '../../../actions/auth';
import { toggleModal } from '../../../actions/ui';

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  meals: state.menu.meals,
  submitting: state.menu.working,
  submitError: state.menu.error,
  currentDay: state.menu.currentDay,
  metadata: state.menu.metadata
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout, fetchMenu, toggleModal, setCurrentDay
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CatererMenu);