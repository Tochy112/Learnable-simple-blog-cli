const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array for blog posts storage
let blogPosts = [];

// Show menu options
function showMenu() {
    console.log("\n A Simple Blog CLI");
    console.log("1. Create a Post");
    console.log("2. View All Posts");
    console.log("3. Delete a Post");
    console.log("4. Exit");
    getUserChoice();
}

// Handle user input
function getUserChoice() {
    rl.question("Choose an option: ", (choice) => {
        switch (choice) {
            case "1":
                createPost();
                break;
            case "2":
                viewPosts();
                break;
            case "3":
                deletePost();
                break;
            case "4":
                console.log("Exiting the cli...Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                showMenu();
                break;
        }
    });
}

// Create a new post
function createPost() {
    rl.question("Enter post title: ", (title) => {
        rl.question("Enter post content: ", (content) => {
            blogPosts.push({ title, content });
            console.log("Post created successfully!");
            showMenu();
        });
    });
}

// View all posts
function viewPosts() {
    if (blogPosts.length < 1) {
        console.log("No posts available.");
    } else {
        blogPosts.forEach((post, index) => {
            console.log(`\nPost ${index + 1}`);
            console.log(`Title: ${post.title}`);
            console.log(`Content: ${post.content}`);
        });
    }
    showMenu();
}

// Delete a post
function deletePost() {
    if (blogPosts.length < 1) {
        console.log("No posts to delete.");
        showMenu();
    } else {
        rl.question("Enter the post number to delete: ", (num) => {
            const index = parseInt(num) - 1;
            if (index >= 0 && index < blogPosts.length) {
                blogPosts.splice(index, 1);
                console.log("Post deleted successfully!");
            } else {
                console.log("Invalid post number.");
            }
            showMenu();
        });
    }
}


showMenu();
