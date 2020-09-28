window.onload = function() {
    let links = window.location.href.split('/');
    let projectName;

	/* if there's description, it's not someone's project page! */
	let description = document.getElementsByClassName('project-desc-item')[0];
	if (description == undefined) {
		projectName = links[links.length - 2];
	} else {
		projectName = links[links.length - 1];
	}

	/* generate link HTML */
	const elementString = `<div class="project-attachment-item">
<h4 class="attachment-name">
<span class="icon-file"></span>
<a target="_blank" href="http://42subject.hygoni.com/subjects/${projectName}.pdf">mirror of subject.pdf</a>
</h4>
</div>`;

	/* add link in parent (as first element) */
    const parentElement = document.getElementsByClassName("project-attachments-list")[0];
    if (parentElement == undefined)
        return ;
    var element = document.createElement('div');
    element.innerHTML = elementString;
    parentElement.prepend(element);
}
