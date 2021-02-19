import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';


function UltimaTVPlayer(props) {
    const [streams] = useState([
        { value: 0, label: 'pikotv_hls', url: 'https://172.104.156.57:4043/origin/cmaf/index.m3u8' },
        { value: 1, label: 'pikotv_dash', url: 'https://172.104.156.57:4043/origin/cmaf/index.mpd' },
        { value: 2, label: 'shaka_demo_hls', url: 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8' },
        { value: 3, label: 'mux hls', url: 'https://stream.mux.com/Wxle5yzErvilJ02C13zuv8OSeROvfwsjS.m3u8' },
        { value: 4, label: 'Scout Fido', url: 'https://lydiaxox.scouttv.tv/FIDO_TV_OUT/index.m3u8' },
        { value: 5, label: 'Scout PBS', url: 'https://marlenaxox.scouttv.tv/WVPT_PBS_OUT/index.m3u8' }
    ]);
    const [selectedStreamIndex, setSelectedStreamIndex] = useState(0)

    return (
        <div className="ultimaTVplayerWrapper">
            <span>Select stream : </span>
            <label className="ultRadio">
            <input
                    type="radio"
                    name="stream_url"
                    value={streams[0].value}
                    checked={selectedStreamIndex === streams[0].value}
                    onChange={(e) => {
                        setSelectedStreamIndex(parseInt(e.currentTarget.value))
                    }} />
                pikotv_hls
            </label>
            <label className="ultRadio">
            <input
                    type="radio"
                    name="stream_url"
                    value={streams[1].value}
                    checked={selectedStreamIndex === streams[1].value}
                    onChange={(e) => {
                        setSelectedStreamIndex(parseInt(e.currentTarget.value))
                    }} />
                    pikotv_dash
            </label>
            <label className="ultRadio">
                <input
                    type="radio"
                    name="stream_url"
                    value={streams[2].value}
                    checked={selectedStreamIndex === streams[2].value}
                    onChange={(e) => {
                        setSelectedStreamIndex(parseInt(e.currentTarget.value))
                    }} />
                    shaka_demo_hls
            </label>
            
            <ShakaPlayer autoPlay src={streams[selectedStreamIndex].url} />
        </div>
    )
}

export default UltimaTVPlayer;