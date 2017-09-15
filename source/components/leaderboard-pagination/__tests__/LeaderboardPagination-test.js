import LeaderboardPagination from '../../leaderboard-pagination'

describe('LeaderboardPagination', () => {
  it('should render pagination controls', () => {
    const wrapper = mount(
      <LeaderboardPagination
        pageSize={10}
        hasNextPage={() => {}}
      />
    )
    const item = wrapper.find('LeaderboardPagination')
    const buttons = item.find('button')
    expect(buttons.length).to.eql(2)
  })

  it('fires previous and next page functions when controls are pressed', () => {
    let nextPageCallCount = 0
    const nextPage = () => (nextPageCallCount++)

    let prevPageCallCount = 0
    const prevPage = () => (prevPageCallCount++)

    const wrapper = mount(
      <LeaderboardPagination
        pageSize={10}
        nextPage={nextPage}
        prevPage={prevPage}
        hasNextPage={() => {}}
      />
    )

    const item = wrapper.find('LeaderboardPagination')
    const nextPageButton = item.find('button').at(1)
    nextPageButton.simulate('click')

    const prevPageButton = item.find('button').at(0)
    prevPageButton.simulate('click')

    expect(nextPageCallCount).to.eql(1)
    expect(prevPageCallCount).to.eql(1)
  })
})
