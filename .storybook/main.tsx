<ThemeProvider theme={darkTheme}>
  <Roster>
    <RosterHeader
      title="Present"
      badge={2}
      onClose={() => {}}
      searchValue="Michael"
      onSearch={() => {}}
    />
    <RosterGroup>
      <RosterCell
        name="Michael Scott"
        subtitle="Regional Manager"
        muted={false}
        videoEnabled={true}
      />
      <RosterCell
        name="Michael Scarn"
        subtitle="FBI agent"
        muted={true}
        videoEnabled={false}
      />
    </RosterGroup>
    <RosterGroup title="Left" badge={2}>
      <RosterCell name="Dwight" subtitle="Assistant regional manager" />
      <RosterCell name="Mike the Magic" subtitle="Magician" />
    </RosterGroup>
  </Roster>
</ThemeProvider>

