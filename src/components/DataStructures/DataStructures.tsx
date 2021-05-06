import { Box, Typography } from "@material-ui/core";
import React from "react";

const DataStructures: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Data Structures
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What are Data Structures?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						Data Structures are collections of values, the
						relationships among them, and the functions or
						operations that can be applied to the data
					</p>
					<ul>
						<li>Binary Search Trees</li>
						<li>Queues</li>
						<li>Singly Linked Lists</li>
						<li>Undirected Unweighted Graphs</li>
						<li>Binary Heaps</li>
						<li>Directed Graphs</li>
						<li>Hash Tables</li>
						<li>Doubly Linked Lists</li>
						<li>Stacks</li>
					</ul>
                    <p>Why so many?</p>
                    <p>Different data structures excel at different things. Some are highly specialized, while others(like arrays) are more generally used</p>
                    <p>Why care?</p>
                    <p>The more time you spend as a developer, the more likely you'll need to use one of these data structures </p>
                    <p>You've already worked with many of them unknowingly!</p>
                    <p>Interviews</p>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Javascript Stuff
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>What is a class?</p>
                    <p>A blueprint for creating objects with pre-defined properties and methods</p>
                    <pre>{`
                    class Student {
                        constructor(firstName, lastName){
                            this.firstName = firstName;
                            this.lastName = lastName;
                        }
                        fullName(){
                            return 'Your full name is ' + this.firstName + ' ' + this.lastName
                        }

                        static enrollStudents(...students){
                            // send email
                        }

                    }

                    let firstStudent = new Student("Mike", "Smith");
                    firstStudent.fullName(); answer Mike Smith

                    Student.enrollStudents([firstStudent, secondStudent])
                    `}</pre>
                    <p>The method to create new objects must be called costructor</p>
                    <p>The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!</p>
                    <p>Inside the instance methods and constructor, the keyword this refers to the object created from that class (also known as an instance)</p>
                    <ul>
                        <li>Classes are blueprints that when created make objects known as instances</li>
                        <li>Classes are created with the new keyword</li>
                        <li>The constructor function, is a special function that gets run when the class is instantiated</li>
                        <li>Instance methods can be added to classes similar to methods in objects</li>
                        <li>Class methods can be added using the static keyword</li>
                    </ul>
				</Typography>
			
			</Box>
		</>
	);
};

export default DataStructures;
