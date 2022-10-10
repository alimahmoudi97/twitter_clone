import React,{ useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { AiOutlineSmile } from 'react-icons/ai';

const AddPicker = ({ setInput, classNem = "", position = "down" }) => {
    const [showEmoji, setShowEmoji] = useState(false);
    const addEmoji = (emoji) => {
        setInput((perv) => perv + emoji.native);
    };
    return (
        <div>
            <span>
                <AiOutlineSmile onClick={() => setShowEmoji(!showEmoji)} size={40} style={{color: 'rgb(29, 155, 240)'}} />
            </span>
            {showEmoji && (
                <div style={{
                    bottom: 50,
                    position:'fixed'
                }}>
                    <Picker 
                        showPreview={true}
                        onSelect={addEmoji}
                    />
                </div>
            )}
        </div>
    )
}
export default AddPicker;