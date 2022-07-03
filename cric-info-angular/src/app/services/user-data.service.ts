import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { CMatch } from '../model/cmatch';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers():Observable<Array<User>>{
    return this.httpClient.get<Array<User>>('http://localhost:8085/user/getUserDetails')  
  }

  addUser(user : User){
    console.log(user);
    return this.httpClient.post('http://localhost:8085/user/register' , user);
  }
  
  getUserByMailAndPassword(name , pass) : Observable<User>{
    return this.httpClient.get<User>(`http://localhost:8085/user/getLoginDetails?email=${name}&password=${pass}`);
  }

  sendMail(email) {
    return this.httpClient.get(`http://localhost:8085/user/sendMail?email=${email}`);
  }

  updateUser(user:User , email:String){
    return this.httpClient.put(`http://localhost:8085/user/updateUser/${email}` , user);
  }


  getUserByMail(name) : Observable<User>{
    return this.httpClient.get<User>(`http://localhost:8085/user/getUserByEmail?email=${name}`);
  }

  //user recommendations mongo api

  addRecommendations(cmatch: CMatch): Observable<CMatch> {
    return this.httpClient.post<CMatch>(`http://localhost:8085/recommendations/saveUserRecommendations`, cmatch);

  }
  getRecommendations(email): Observable<Array<CMatch>> {
    return this.httpClient.get<Array<CMatch>>(`http://localhost:8085/user/getAllUserRecommendations?email=${email}`);
  }

  getUserRecommendations(username): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`http://localhost:8086/recommendations/getUserRecommendations/${username}`);
  }
  addUserRecommendations(cmatch: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8086/recommendations/saveUserRecommendations', cmatch);
  }

  deleteUserRecommendation(matchid:number, username:String): Observable<any> {
    return this.httpClient.delete(`http://localhost:8086/recommendations/deleteByMatchidAndUsername?matchid=${matchid}&username=${username}`);
  }
 
  allRecommendations(){
    return this.httpClient.get<Array<any>>("http://localhost:8086/recommendations/count");
  }

  //for user reminders
  addReminders(match:CMatch):Observable<CMatch>
  {
     return this.httpClient.post<CMatch>("http://localhost:8087/userReminders/saveUserReminders", match);
  }
  getReminders(username):Observable<Array<any>>
  {
    console.log(username);
      return this.httpClient.get<Array<any>>(`http://localhost:8087/userReminders/getUserReminders/${username}`);
  }
  deleteReminder(matchid:number,username:String){
    return this.httpClient.delete<CMatch>(`http://localhost:8087/userReminders/deleteByIdAndUsername?matchid=${matchid}&username=${username}`);
  }


}
