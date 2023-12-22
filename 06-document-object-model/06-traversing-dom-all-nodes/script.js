// Traversing DOM Nodes

// DOM Node Types
// -------------------------------------
// 1. Element:   represents an element
//    children: Element, Text, Comment, ProcessingInstruction, CDATASection, 
//              EntityReference
// 2. Attr:      represents an attribute
//    children: Text, EntityReference
// 3. Text:      represents textual content in an element/attribute
//    children: None
// 4. CDATASection:  represents a CDATA section in a document 
//                    (text that will not be parsed by parser)
//    children: None
// 5. EntityReference: represents an entity reference
//    children: Element, ProcessingInstruction, Comment, Text, CDATASection, 
//              EntityReference
// 6. Entity:    represents an entity
//    children: Element, ProcessingInstruction, Comment, Text, CDATASection, 
//              EntityReference
// 7. ProcessingInstruction:  Represents a processing instruction
//    children: none
// 8. Comment    represents a comment
//    children: none
// 9. Document: represents the entire document (root node of the DOM tree)
//    children: Element, ProcessingInstruction, Comment, DocumentType
// 10. DocumentType: provides an interface to the entities defined for the 
//                   document
//    children: none
// 10. DocumentFragment: represents a "lightweight" Document object which can 
//                       hold a portion of a document
//    children: Element, ProcessingInstruction, Comment, Text, CDATASection, 
//              EntityReference
// 12. Notation: represents a notation declared in the DTD
//    children: None


