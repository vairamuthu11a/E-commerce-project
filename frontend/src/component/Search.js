import {useState} from "react";
import {useNavigate} from "react-router-dom"

export default function Search(){
 

    const [KeyWord, setKeyWord] = useState("");
    const navigate = useNavigate();

    const searchHandler = () => {
          navigate("/search?keyword="+KeyWord)
    }

    return  <div className="input-group">
    <input
        type="text"
        id="search_field"
        onChange={(e) => setKeyWord(e.target.value)}
        onBlur={searchHandler}
        className="form-control"
        placeholder="Enter Product Name ..."
    />
    <div className="input-group-append">
        <button onClick={searchHandler} id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
</div>
    
}
