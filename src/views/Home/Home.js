import React, { Component } from "react";
import InputWithDatalist from "../../components/InputWithDatalist/index.js";
import WeatherCards from "../../components/WeatherCards/WeatherCards.js";
import Toast from "../../components/Toast/Toast.js";
import { ZONES, WARNING } from "../../commons/constants/";
import { connect } from "react-redux";
import {toastHide, toastShow} from "../../redux/actions";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeoutHide: 0,
      timeoutShow: 0
    }
    this.showMessages = this.showMessages.bind(this);
  }
  showMessages(arr) {
  const {toastShow, toastHide } = this.props;
    if (arr.length !== 0){
      toastShow({msg:arr[0], icon: WARNING});
      if (arr.slice(1).length !== 0){
      this.setState({timeoutHide:setTimeout(()=>{
        toastHide();
        this.setState({
          timeoutShow: setTimeout(
              () => this.showMessages(arr.slice(1)), 
              2000
            )
          })},5000)})
        }else{
          this.setState({timeoutHide:setTimeout(()=>toastHide(),5000)})
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this.state.timeoutHide);
    clearTimeout(this.state.timeouShow);
  }

  componentWillMount() {
    const { alerts } = this.props;
    this.showMessages(alerts);
  }

  componentDidUpdate(prevProps){
    if (prevProps.alerts !== this.props.alerts){
      const { alerts } = this.props;
      this.showMessages(alerts);
    }
  }

  render() {
    return (
        <main className="home">
            <InputWithDatalist datalist={ZONES} placeholder="Location..." />
            <WeatherCards />
            <Toast />
        </main>
    );
  };
}

const mapDispatchToProps = {
  toastHide,
  toastShow
}

function mapStateToProps(state){
  return {
    alerts: state.toast.alerts
};
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
