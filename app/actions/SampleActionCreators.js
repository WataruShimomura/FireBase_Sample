import AppDispatcher from "../dispatcher/AppDispatcher";
import { ActionTypes } from "../constants/AppConstants";

import firebase from 'firebase/app'; //必須
import 'firebase/firestore'; //必要なモジュールごとにimport

firebase.initializeApp({
  apiKey: 'AIzaSyDn2JNTsC0hxggtrg4qbK7IM9zM-Cycfzw',
  authDomain: 'githubdb-d71b1.firebaseapp.com',
  projectId: 'githubdb-d71b1'
});

const db = firebase.firestore();

const getSampleAction001 = () => ({
  type: ActionTypes.SAMPLE_TYPE_001,
  data: {
    title: "New Title",
    subtitle: "Created by ActionCreator",
    text: "This text will be overwritten",
  },
});

const getSampleAction002 = () => ({
  type: ActionTypes.SAMPLE_TYPE_002,
  data: "RESULT OF YOUT ACTION",
});

export const SampleActionCreators = {
  actionCreator001() {
    //articlesコレクションから1件データを取得
    db.collection("articles").limit(1).get().then((response) => {
      //forEach()でドキュメントの配列がとれる
      response.forEach((doc) => {
        //data()でドキュメントがとれる
        const document = doc.data();
        //dispatch()でFluxのストアに送信
        AppDispatcher.dispatch({
          type: ActionTypes.TYPE_001,
          data: {
            "title": document.title,
            "subtitle": document.subtitle,
            "text": document.text
          },
        });
      });
    });
  },
  actionCreator002() {
    AppDispatcher.dispatch(getSampleAction002());
  },
};