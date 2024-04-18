const content = document.getElementById("content");
const getModal = () => {

    const modal = `
        <dialog id="dialog">
            <form method="dialog">
                <div class="form-group">
                    <label for="title">Name</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
                    <em class="title-error pt-2">Put a valid name (text only)</em>
                </div>
                <div class="form-group">
                    <label for="author">Author*</label>
                    <input type="text" class="form-control" id="author" name="author" placeholder="Enter author" required>
                    <em class="author-error pt-2">Put a valid author (text only)</em>
                </div>

                <div class="form-group">
                    <label for="title">Description*</label>
                    <textarea class="form-control" id="description" name="description" rows="5" maxlength="100" required></textarea>
                    <em class="description-error pt-2">Put a valid description (text only)</em>
                </div>
                <div class="mt-4">
                    <input type="submit" id="submit" value="Submit" class="btn btn-primary" formnovalidate />
                    <input type="submit" class="btn btn-primary" id="js-close" value="Close" />
                </div>
            </form>
        </dialog>
    `
    content.insertAdjacentHTML('afterbegin',modal);

}

export default getModal;