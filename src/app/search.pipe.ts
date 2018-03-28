import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tasklist: any, find: any): any {
    if(find===undefined)return tasklist;
    return tasklist.filter(function(task){
      
      if(task.taskname.toLowerCase().includes(find.toLowerCase()))
      {
        return task.taskname;
      }
      
    })
  }

}
