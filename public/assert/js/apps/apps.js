var React = require('react');

var Hello = React.createClass({
    getInitialState: function() {
        console.log('getInitialState');
        return {
            text:"hello world!!!!!!"
        }

    },
    getDefaultProps: function() {
        console.log('getDefaultProps');
      return {
          pro:"好好学习，天天向上"
      }
    },
    tick: function() {
        this.setState({text:"你好呀啊啊啊啊 啊！"})
    },

    componentWillMount: function() {
        console.log('componentWillMount');
    },

    componentDidMount: function() {
        console.log('componentDidMount');
        var _that = this;
        //setTimeout(this.tick, 5000);
    },
    componentWillReceiveProps: function(nextProps) {
        console.log('componentDidMount' + nextProps);
        this.setState({text: "打击好材质"});
    },
    shouldComponentUpdate: function() {
        console.log('shouldComponentUpdate');
        this.setState({text: "我被改变了！！！"})
    },
    componentWillUpdate: function() {
        console.log('componentWillUpdate');
    },
    componentDidUpdate: function() {
        console.log('componentDidUpdate');
    },

    render : function() {
      return (
        <div>
            <h1>{this.state.text} <button  onClick= {this._changeText}>改变</button></h1>
            <h1>{this.props.pro}</h1>
        </div>
      )
    },

    _changeText: function() {
        this.setState({text: "我被改变了！！！"})
    }


});

React.render(<Hello text="Hello22 World!" />, document.getElementById("render"));