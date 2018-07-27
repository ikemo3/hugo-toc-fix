document.addEventListener("DOMContentLoaded", function () {
    const toc = document.getElementById('TableOfContents');

    if (toc === null) {
        return;
    }

    // make heading tree
    const root = {children: []};

    let h2 = null;
    let h3 = null;
    let h4 = null;
    let h5 = null;

    const headings = document.querySelectorAll("h2, h3, h4, h5, h6");
    headings.forEach(function (heading) {
        if (heading.getAttribute("data-toc-ignore") === "true") {
            return;
        }

        switch (heading.tagName.toLowerCase()) {
            case "h2":
                h2 = {id: heading.getAttribute("id"), title: heading.textContent, children: []};
                root.children.push(h2);
                h3 = h4 = h5 = null;
                break;

            case "h3":
                h3 = {id: heading.getAttribute("id"), title: heading.textContent, children: []};
                h2.children.push(h3);
                h4 = h5 = null;
                break;

            case "h4":
                h4 = {id: heading.getAttribute("id"), title: heading.textContent, children: []};
                h3.children.push(h4);
                h5 = null;
                break;

            case "h5":
                h5 = {id: heading.getAttribute("id"), title: heading.textContent, children: []};
                h4.children.push(h5);
                break;

            case "h6":
                const h6 = {id: heading.getAttribute("id"), title: heading.textContent, children: []};
                h5.children.push(h6);
                break;
        }
    });

    // tree -> DOM
    function createToc(element) {
        if (element.children.length === 0) {
            return null;
        }

        const ul = document.createElement("ul");

        element.children.forEach(function (child) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#" + child.id;
            a.textContent = child.title;
            li.appendChild(a);

            const childNodes = createToc(child);
            if (childNodes !== null) {
                li.appendChild(childNodes);
            }

            ul.appendChild(li);
        });

        return ul;
    }

    toc.innerHTML = "";
    toc.appendChild(createToc(root));
});
