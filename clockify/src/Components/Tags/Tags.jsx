import Styles from "../Tags/Tags.module.css"

const Tags=()=>{
    return(
        <>
        <h1>Tags</h1>
        <div className={Styles.top}>
            <div>
                <select name="" id="" className={Styles.select}>
                    <option value="">Show active</option>
                    <option value="">Show archived</option>
                    <option value="">Show all</option>
                </select>
                <input type="text" placeholder="Search by name" className={Styles.serachbyname} />
            </div>
            <div className={Styles.right}>
                <input type="text" placeholder="Add a new tag" className={Styles.tag}/>
                <button className="hello">Add</button>
            </div>
        </div>
        <div className={Styles.list}>
            Name
        </div>
        </>
    )
}

export default Tags ;