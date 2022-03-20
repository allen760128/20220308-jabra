
import React from 'react';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity } from 'react-native';

const About = (props) => {

    const Data = [{ id: 1, title: '使用耳機', data: [{ title: '檢查韌體更新', link: '檢查韌體更新' }, { title: '語音助理', link: '語音助理' }, { title: '語音指示語言', link: '語音指示語言' }, { title: '閱讀使用者手冊', link: '閱讀使用者手冊' }, { title: 'Jabra Elite 65t常見問題', link: 'Jabra Elite 65t常見問題' }] },
    { id: 2, title: 'Jabra協助', data: [{ title: 'Find My Jabra防丟失功能', link: 'Find My Jabra防丟失功能' }, { title: '註冊你的Jabra Elite 65t', link: '註冊你的Jabra Elite 65t' }, { title: '為你的Jabra Elite 65t評分', link: '為你的Jabra Elite 65t評分' }, { title: '線上購買Jabra', link: '線上購買Jabra' }, { title: '技術資訊', link: '技術資訊' }] },
    { id: 3, title: 'Sound+應用程式', data: [{ title: '為此應用程式評分', link: '為此應用程式評分' }] },
    { id: 4, title: '法律聲明', data: [{ title: '隱私權政策', link: '隱私權政策' }, { title: '法律免責聲明', link: '法律免責聲明' }] },
    ];
    const handleSelect = (toLink) => {
        console.log(toLink);
        props.navigation.push(toLink);
    }
    const sectionHeader = ({ title }) => {
        return (
            <View style={styles.secTop}>
                <Text style={{ fontSize: 26, color: '#fff' }}>{title}</Text>
            </View>
        )
    }
    const sectionContent = ({ item, index }) => {
        return (
            <View style={styles.secBottom}>
                <View style={styles.bottomContent}>
                    <TouchableOpacity onPress={() => { handleSelect(item.link) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>{item.title}</Text>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/img/mode_setting_icon6.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.secWrap}>
                <SectionList
                    sections={Data}
                    keyExtractor={(item, index) => item + index}
                    renderSectionHeader={({ section: { title } }) => (
                        sectionHeader({ title })
                    )}
                    renderItem={({ item, index }) => (
                        sectionContent({ item, index })
                    )
                    }
                ></SectionList>
            </ View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',
    },
    secWrap: {
        flex: 1,
    },
    secTop: {
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#4f5157',
    },
    secBottom: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    bottomContent: {
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',

    },
});

export default About;