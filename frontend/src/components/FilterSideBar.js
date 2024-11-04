import './FilterSideBar.css'

const FilterSidebar = () => {
    return (
        <div className="filter-sidebar">
            <h3>Filters</h3>
            <div className="filter-section">
                <h4>Languages</h4>
                <div className="filter-tags">
                    <span>English</span>
                    <span>Hindi</span>
                    <span>Tamil</span>
                    <span>Telugu</span>
                    <span>Kannada</span>
                    <span>Punjabi</span>
                </div>
            </div>
            <div className="filter-section">
                <h4>Genres</h4>
                <div className="filter-tags">
                    <span>Adventure</span>
                    <span>Action</span>
                    <span>Drama</span>
                    <span>Animation</span>
                    <span>Comedy</span>
                    <span>Thriller</span>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
