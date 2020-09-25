window.onload = function() {
    let links = window.location.href.split('/');
    const projectName = links[links.length - 1];
    const elementString = `<div class="project-attachment-item">
<h4 class="attachment-name">
<span class="icon-file"></span>
<a target="_blank" href="http://42subject.hygoni.com/subjects/${projectName}.pdf">mirror of subject.pdf</a>
</h4>
</div>`;
    const parentElement = document.getElementsByClassName("project-attachments-list")[0];
    if (parentElement == undefined)
        return ;
    var element = document.createElement('div');
    element.innerHTML = elementString;
    parentElement.prepend(element);
}
