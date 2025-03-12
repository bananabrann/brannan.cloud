<h2>Header 2 header here</h2>
<p>
	Sit amet consectetur adipisicing elit. Reiciendis, in dignissimos? Lorem ipsum dolor sit amet,
	consectetur adipiscing elit. Vivamus maximus dolor augue, eget rutrum mauris volutpat quis. Morbi
	laoreet rhoncus nibh nec porttitor. Cras ac ante nisi. Integer in sapien sollicitudin nibh
	vestibulum tincidunt ac sed risus. Vestibulum ut mi vitae risus maximus imperdiet. Aenean aliquam
	odio magna, a finibus nulla molestie commodo. Aenean a sem id neque consectetur ornare.
	Suspendisse consequat imperdiet massa ut imperdiet. Mauris suscipit condimentum porttitor. Saepe
	voluptas eaque magnam neque sunt doloremque iste, at in.
</p>

<h2>Header 2 here with content</h2>
<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus dolor augue, eget rutrum
	mauris volutpat quis. Morbi laoreet rhoncus nibh nec porttitor. Cras ac ante nisi. Integer in
	sapien sollicitudin nibh vestibulum tincidunt ac sed risus. Vestibulum ut mi vitae risus maximus
	imperdiet. Aenean aliquam odio magna, a finibus nulla molestie commodo. Aenean a sem id neque
	consectetur ornare. Suspendisse consequat imperdiet massa ut imperdiet. Mauris suscipit
	condimentum porttitor. Exercitationem nam ab deleniti, tempore error aut ipsam magni!
</p>

<figure>
    <blockquote>
        <p>“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.”</p>
    </blockquote>
    <figcaption class="author">     
        <div><strong>Maria Hill</strong> – Marketing Manager</div>
    </figcaption>
</figure>

<pre><code>
    {
        `
            package main

import (
    "html/template"
    "net/http"
)

func main() {
    // Create a template
    tmpl, err := template.ParseFiles("index.html")
    if err != nil {
        panic(err)
    }

    // Define a handler function
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        data := struct {
            Message string
        }{
            Message: "Hello from Go!",
        }

        // Execute the template with data
        err := tmpl.Execute(w, data)
        if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
        }
    })

    // Start the HTTP server
    http.ListenAndServe(":8080", nil)
}
        `
    }
</code></pre>

<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>
