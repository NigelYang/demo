import React, {Component, PropTypes} from 'react';
import {ScrollView, Button} from 'react-native';
import DemoList from "../component/DemoList";

class MainScreen extends Component {

    /**
     * 注册过的页面会有这个属性数组
     * 这里的属性会被定义路由时设置的属性覆盖
     */
    static navigationOptions = {
        title: "测试覆盖"
    };

    render() {

        // 将该页与其他页面路由建立起来
        const {navigate} = this.props.navigation;

        const items = this.props.items;

        return (
            <ScrollView>
                <DemoList items={items}/>
                <Button onPress={() => navigate('Profile')} title="跳转"/>
            </ScrollView>
        );
    }
}

MainScreen.propTypes = {
    items: PropTypes.array.isRequired
};

MainScreen.defaultProps = {
    items: [
        {name: '陶宏飞', desc: '无力滔滔'},
        {name: '周志忠', desc: '123'},
        {name: '舒韵', desc: '3214'},
        {name: '宋肖俊', desc: '5234'},
        {name: '杨念一', desc: '3568'}
    ]
};

export default MainScreen;