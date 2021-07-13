import React, { Component } from 'react'
import './index.css'

export default class Awal extends Component {
    state = {
        data: [],
        dataFollow: [],
        dataFollowing: []
    }
    componentDidMount() {
        const api = fetch('https://api.github.com/users/faqihakih')
        const apiFollow = fetch('https://api.github.com/users/faqihakih/followers')
        const apiFollowing = fetch('https://api.github.com/users/faqihakih/following')

        api.then((res) => res.json())
            .then((datas) => {
                console.log(datas)
                this.setState({
                    data: datas
                })
            })
        apiFollow.then((res) => res.json())
            .then((datas) => {
                console.log(datas)
                console.log(datas.map((a) => a.login))
                this.setState({
                    dataFollow: datas.map((a) => a.login)
                })
            })
        apiFollowing.then((res) => res.json())
            .then((datas) => {
                console.log(datas)
                console.log(datas.map((a) => a.login))
                this.setState({
                    dataFollowing: datas.map((a) => a.login)
                })
            })
    }

    render() {
        return (
            <div>
                <img src={this.state.data.avatar_url} alt="" />
                <h1>{this.state.data.login}</h1>
                <h1>{this.state.data.company}</h1>
                <div>
                    <div className="following follow">
                        <p>following</p>
                        <p>{this.state.data.following}</p>
                    </div>
                    <div className="following follow">
                        <p>follower</p>
                        <p>{this.state.data.followers}</p>
                    </div>
                </div>
                <div className="follow">
                <h1 className="follow following">followers</h1>
                {this.state.dataFollow.map((b) =>
                    //  forEach((b) =>
                    <a className="tampil" href={"https://github.com/" + b}>{b}</a>
                )}
                <h1 className="follow following">following</h1>
                {this.state.dataFollowing.map((b) =>
                    //  forEach((b) =>
                    <a className="tampil" href={"https://github.com/" + b}>{b}</a>
                )}
                </div>
            </div>
        )
    }
}
