# Search Library

Library to create pages to retrieve data from any endpoint and be filtered.

# Table of Contents
1. [API Reference](#API)
2. [Class BuilderFormService](#Class-BuilderFormService)
3. [BuilderFormService Methods](#Methods)
    1. [addTextItem](#addTextItem)
    1. [addNumberItem](#addNumberItem)
    1. [addDateTimeItem](#addDateTimeItem)
    1. [addCheckBolean](#addCheckBolean)

4. [BuilderFormService configuration methods](#BuilderFormService-configuration-methods) 
    1. [disableActions](#disableActions)
    1. [addAction](#addAction)
    1. [addSearchUlr](#addSearchUlr)


## API

API reference 

``` typescript
import { SearchModule } from 'search-lib'
```

Search selector
``` html
<lib-display-search (formBuilder)="<BuilderFormService>"></lib-display-search>
```

<u>@Input()
formBuilder: BuilderFormService</u>

Collection of definitions to display data rows, data search filters and action.



## Class BuilderFormService

The library is compose on a main class where all de declaration are going to be implemented **BuilderFormService** have to be instantiated in the component where the search table will be displayed.

``` typescript 
import { BuilderFormService } from 'search-lib'

 let builderForm = new BuilderFormService();
```

## Methods

### addTextItem

**addTextItem(data : iTextItem)** Add new row and filter data to display as text input

 * Method : addTextItem(data : iTextItem) 

* Display in Form Search : *text input*

* Display in Table : *raw*

* *iTextItem* : 
    * id (required) : Id to be mapped with  filter and table data.
    * displayName (opt) : Text to display on    table header and on Filter form header (Id     name as default).
    * enableToBeFiltered (opt) : allow to be    displayed as filter filed (true as default).
    * visible (opt) : Allowed to show on table  (true as default).
    * order (opt) : Position to show in table's     result (0 as default) **Pending to implement

``` typescript
iTextItem {
    id: string;
    displayName?:string;
    enableToBeFiltered?:boolean;
    visible?:boolean;
    order?:number;
}
```

### addNumberItem

**addNumberItem(data : iNumberItem)** : Add new row and filter data to display as number input.

* Display in Form Search : *number input*

* Display in Table : *raw*

* *iNumberItem* : 
    * id (required) : Id to be mapped with  filter and table data.
    * displayName (opt) : Text to display on    table header and on Filter form header (Id     name as default).
    * enableToBeFiltered (opt) : allow to be    displayed as filter filed (true as default).
    * visible (opt) : Allowed to show on table  (true as default).
    * order (opt) : Position to show in table's     result (0 as default) **Pending to implement


``` typescript
iNumberItem {
    id: string;
    displayName?:string;
    enableToBeFiltered?:boolean;
    visible?:boolean;
    order?:number;
}
```

### addDateTimeItem

**addDateTimeItem(data : iDateTimeItem)** : Add new row and filter data with date start and date end filters

* Display in Form Search : *date start and date end filters*

* Display in Table : *date pipe MM/dd/yyyy, h:mm a'*

* *iDateTimeItem* : 
    * id (required) : Id to be mapped with  filter and table data.
    * displayName (opt) : Text to display on    table header and on Filter form header (Id     name as default).
    * enableToBeFiltered (opt) : allow to be    displayed as filter filed (true as default).
    * visible (opt) : Allowed to show on table  (true as default).
    * enableDateEnd (opt): Add date end filter to search form.
    * order (opt) : Position to show in table's     result (0 as default) **Pending to implement.
        

``` typescript
iDateTimeItem {
    id: string;
    displayName?:string;
    enableToBeFiltered?:boolean;
    visible?:boolean;
    enableDateEnd?:boolean;
    order?:number;
}
```

### addDateTimeItem

**addDateTimeItem(data : iDateTimeItem)** : Add new row and filter data to display as number input

* Display in Form Search : *date start and date end filters*

* Display in Table : *date pipe MM/dd/yyyy, h:mm a'*

* *iDateTimeItem* : 
    * id (required) : Id to be mapped with  filter and table data.
    * displayName (opt) : Text to display on    table header and on Filter form header (Id     name as default).
    * enableToBeFiltered (opt) : allow to be    displayed as filter filed (true as default).
    * visible (opt) : Allowed to show on table  (true as default).
    * enableDateEnd (opt): Add date end filter to search form.
    * order (opt) : Position to show in table's     result (0 as default) **Pending to implement.
        

``` typescript
iDateTimeItem {
    id: string;
    displayName?:string;
    enableToBeFiltered?:boolean;
    visible?:boolean;
    enableDateEnd?:boolean;
    order?:number;
}
```

### addCheckBoolean

**addCheckBoolean(data : iBoolean)** : Add new row and filter as active (true) or inactive (false).

* Display in Form Search : *Dropw down true false with options*

* Display in Table : mat icon: true : ``<mat-icon>done_outline</mat-icon>``, false : ``<mat-icon>close</mat-icon>``*

* *iBoolean* : 
    * id (required) : Id to be mapped with  filter and table data.
    * displayName (opt) : Text to display on    table header and on Filter form header (Id     name as default).
    * enableToBeFiltered (opt) : allow to be    displayed as filter filed (true as default).
    * visible (opt) : Allowed to show on table  (true as default).
    * order (opt) : Position to show in table's     result (0 as default) **Pending to implement.
        

``` typescript
iDateTimeItem {
    id: string;
    displayName?:string;
    enableToBeFiltered?:boolean;
    visible?:boolean;
    enableDateEnd?:boolean;
    order?:number;
}
```

## BuilderFormService configuration methods

### addAction

**addAction(action : iAction)** : Add button action

* *iAction* : 
    * displayName: Name to be display.
    * icon: Icon to display after text.
    * event(row: any): Method to be invoke on click event

``` typescript
export interface iAction{
    displayName:string;
    icon:string;
    event(row):void;
}
```

### disableActions

**disableActions()** : Disable buttons events 


### addSearchUlr

**addSearchUlr(url : string)** : Declare endpoint where the filter will send data to retrieve results and display on table.
