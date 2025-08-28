## Strikethrough Text Generator

A Simple Jekyll Stimulus app to generate strikethrough text

### Prerequisites
- Ruby 3.0^
- Node 2.2^

#### Install Dependencies
```bash
bundle install && npm install
```

#### Run development
```bash
rake dev
```
the command running jekyll, vite and tailwindcss

open `localhost:4000`

#### Run Rspec Testing
```bash
rake test
```

#### Generate Controller Stimulus
`hello is example`
```bash
rake stimulus[hello]
```
make new file 'hello_controller.js in `app/javascript/controllers`

added import and register hello controller in `app/javascript/application.js`

#### Build js using vite
```bash
rake build
```
file build in `app/build/application.js` 

#### Run Production
```bash
rake p
```

### Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Create a pull request.