const Icon = (props) => {
    return (
        <div className="Icon">
            <i className={"fas fa-" + props.icon + " fa-2x"}></i>
        </div>
    )
}

export default Icon