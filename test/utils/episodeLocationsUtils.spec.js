const {originLocationMapper} = require('../../utils/episodeLocationsUtils')
const episodeList = require('../../mocks/episodeListThreeEntries')
const characterList = require('../../mocks/characterListFiveEntries')
const {originLocationMapperResponse} = require('../../mocks/reponses')
const {expect} = require('chai')

describe('Episode Location Utils', ()=>{
  const results =  originLocationMapper(episodeList,characterList)
  describe('originLocationMapper - for every episode, find their characters, specify their location and return parsed response ',()=>{
    it('Results length should match episodeList length', ()=>{
      expect(results.length).to.be.equal(episodeList.length)
    })
    it('Results locations should match mocked response', ()=>{
      expect(results.locations).to.be.eql(originLocationMapperResponse.locations)
    })
    it('Results should be equal to mocked response', ()=>{
      expect(results).to.be.eql(originLocationMapperResponse)
    })
  })  
})





