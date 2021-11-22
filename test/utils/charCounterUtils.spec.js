const {charTotalCount, charCounter} = require('../../utils/charCounterUtils')
const characterResourceData = require('../../mocks/charactersDataTwoEntries')
const {expect} = require('chai')


describe('Char Counter Utils', ()=>{
  describe('charCounter - count matches of a character in a string',()=>{
    it('Count "o" in "COOKBOOK" ', ()=>{   
      let count = charCounter('cookbook','o')   
      expect(count).to.be.equal(4)
    })
  })
  describe('charTotalCount - iterate over resource data and sums charCounter\'s output',()=>{
    it('"[Rick Sanchez, Morty Smith]" count "i" and return total ', ()=>{ 
      const totalCount = charTotalCount(characterResourceData,'name','i')
      expect(totalCount).to.be.equal(2)
    })
  })  
})




