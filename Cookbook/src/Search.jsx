function Search() {
    return (
        <div class="container mar">
            <div class="d-flex flex-row justify-content-center">
                <div class="d-flex btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="d-flex btn btn-success btn-lg btn-block">New Recipes</button>
                    <button type="button" class="d-flex btn btn-primary btn-lg btn-block">Saved Recipes</button>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-center mar mar-btm">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder="Whatcha looking for?" />
                </div>
                <button type="button" class="btn btn-success">Search</button>
            </div>
        </div>
    )
}

export default Search;