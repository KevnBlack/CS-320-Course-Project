# CS 320 Course Project: WSU Vancouver
## Instructor: Xinghui Zhao
## Team Members:
  - Shane Bellika
  - Kevin Black
  - Alex Sloan

## Project Description (Status: DESIGN PHASE)
**SubScruple** is a free, subscription service, web-based application that users can purchase subscriptions through different services offered in their respective location. These subscriptions can be bought at different tier levels and provide extra benefits to the user depending on the tier. As the name may entail, **SubScruple** was formed out of the idea of a subscription based business model that concentrates the subscription purchases of every user in one place. The aim of this product is to collect subscription data from the user and store it internally in such a way that reduces the time and complexity of managing subscription records. This product is simply not a follow-on member of a higher product family, but a new, self-contained product with inspiration drawn from current subscription based models/applications. The following sections describe the milestones currently being worked on for this project.

## Introduction
The objective of the CS 320 course project is to learn and experience processes and methods of software engineering by designing and developing a self-defined, small scale software system in a team setting. In the rest of this semester, your will work with your teammates to further explore the topic, define a software requirement specification (SRS), design a software system, implement the software system, test it and provide complete documentation and source code at the end of the semester.

The minimum expectation for the scope of the software are as follows, it: 
- Is a web application.
- Has a landing page which helps a user to understand what the application is about.
- Has multiple other pages besides the landing page.
- Has some data to maintain/manipulate.

## Software Requirements Specification (Milestone 1) (COMPLETED ON 10/03/2018)
  A software requirements specification (SRS) is a description of a software system to be developed. It lays out functional and non-functional requirements, and may include a set of use cases that describe user interactions that the software must provide.
  Software requirements specification establishes the basis for an agreement between customers and contractors or suppliers on what the software product is to do as well as what it is not expected to do. Software requirements specifcation permits a rigorous assessment of requirements before design can begin and reduces later redesign.
  - Fill out each section of the document. If a section of the SRS is not applicable to your project, state this in the document and explain why.
  - Construct detailed Use-Cases (Section 3.3 of the SRS) describing scenarios of using the system.
  - Functional requirements should be described in section 3.2 and then specified using use-case diagram(s) in section 3.3.
  - State non-functional requirements in section 4.
  - Keep track of group meetings in Appendix B.
  - Use complete and precise sentences in your SRS document.
  - Use this platform to collaborate with teammates.
  
## Milestone 1 Submission (Due 10/07/2018 at 11:59pm, 20% of the final grade)
One representative needs to submit:
  - SRS document in PDF format.
  - The git log of the team work. This can be a screenshot of the commits on GitHub. Please make sure that each commit has a meaningful description.

## Software Design (Milestone 2) (IN PROGRESS)
  Software design is a process by which the software requirements are translated into a representation of software components, interfaces, and data necessary for the implementation phase. The Software Design Document (SDD) shows how the software system will be structured to satisfy the requirements. It is the primary reference for code development, therefore, it must contain all the information required by a programmer to write code. In this phase, you will design the system structure and behavior using the following UML diagrams:
  - Activity Diagrams: Revisit the use case diagram(s) you included in the SRS. Design an activity diagram for each scenario. Note that you do not need to design an activity diagram for every use case/scenario, i.e., you can ignore the use cases which are easy to implement, and only include activity diagrams for the more complex ones. To achieve better traceability and easier validation at later
stage of the project, you should reference your SRS when possible, e.g. Activity Diagram 2 models Use Case 5. This enables traceability. Also, you should use the "swimlane" type of
activity diagrams
  - Structural Modeling: Design a class diagram for the system. You may consider to break the diagram into several smaller ones if necessary. In your class diagram(s), you should include the main attributes and operations (methods) for each class. Note that even if you are not going to write actual "classes" in your code, you still can create the class diagram. In this case, each class will be a module in your implementation.
  - Behavior Modeling: Depending on the type of your system, you may design either sequence diagrams or state diagrams. Specifically, sequence diagrams are suitable for data-driven systems, and state diagrams are good for event-driven systems. Note that it is also possible to have both, because it might be possible that certain functionalities of your system is event-driven, but others are
data-driven.

## Milestone 2 Submission (Due 10/21/2018 at 11:59pm, 20% of the final grade)
One representative needs to submit:
  - Design document in PDF format.
  - A text file which contains the link to the GitHub page of your project.
