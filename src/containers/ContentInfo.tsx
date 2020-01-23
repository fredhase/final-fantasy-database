import React, { useState } from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../redux/configureStore';
import * as charReducer from '../redux/reducers/characterReducer';

import '../style/css/ContentInfo.css';

function ContentInfo() {
    const [toggle, changeToggle] = useState(false);
    const dispatch = ReactRedux.useDispatch();

    const characters = ReactRedux.useSelector( (state: IAppState) => {
        return state.characterReducer.characters;
    });

    function getCharacters(){
        dispatch(charReducer.getCharacter());
        changeToggle(!toggle);
    }

    if( toggle === false ){
        return(
            <button onClick={ getCharacters }> Get Characters! </button>
        );
    } else {    
        return(
            <>
                <button onClick={ getCharacters }> Hide Characters! </button>
                { characters.map((character: any) => {
                    return(
                        <div key={ character.id }>
                            <div> { character.name } </div>
                            <div> { character.origin } </div>
                            <img src={ character.picture } alt={ character.name } />
                            <div>--------------------------------------------------</div>
                        </div>
                    );
                }) }
            </>
        );
    }

}

export default ContentInfo;